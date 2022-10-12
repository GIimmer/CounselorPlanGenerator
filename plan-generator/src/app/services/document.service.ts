import { Injectable } from '@angular/core';
import { DBManifestation } from 'db';
import { Document, Paragraph, Packer, ISectionOptions, HeadingLevel } from 'docx';
import * as fs from 'file-saver';

type SubcategoryRef = { [subcategory: string]: DBManifestation[] };
export type ManifestationsRef = { [category: string]: SubcategoryRef };

function joinExceptLastLike(strings: string[], joiner: string = ', ', lastLike: string = ', and ') {
  if (strings.length === 1) return strings[0];
  return strings.slice(0, -1).join(joiner) + lastLike + strings.slice(-1);
};

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  gen(name: string, manifestationsRef: ManifestationsRef) {
    const title  = `Plan for ${name}`;

    const subcategoryRefs = Object.values(manifestationsRef);
    const subcategories = subcategoryRefs.flatMap(subcategoryRef => {
      return Object.keys(subcategoryRef);
    })
    if (!subcategoryRefs.length) return;

    const problemStatement = this.getProblemStatement(subcategoryRefs);
    const goalStatement = this.getGoalStatement(subcategories);

    const children: ISectionOptions['children'] = [];
    children.push(new Paragraph({ text: `Development plan for ${name}`, heading: HeadingLevel.HEADING_1 }));
    children.push(...[new Paragraph({ text: '' }), new Paragraph({ text: '' })]);
    children.push(...this.getStatementAsChildren('Problem', problemStatement));
    children.push(...this.getStatementAsChildren('Goal', goalStatement));
    children.push(...this.getObjective('Awareness', subcategories));
    children.push(...this.getObjective('Integration', subcategories));
    children.push(...this.getObjective('Maintenance', subcategories));
    const sections: ISectionOptions[] = [{
      children: children
    }];

    const document = new Document({
      title: title,
      sections,
    });
    Packer.toBlob(document).then(blob => {
      fs.saveAs(blob, `${name}Plan.docx`)
    })
  }

  private getGoalStatement(subcategories: string[]) {
    return `Improve ability to demonstrate ${joinExceptLastLike(subcategories, ', ', ', and ')} in order to score at a proficient level.`;
  }

  private getProblemStatement(subcategoryRefs: SubcategoryRef[]) {
    const sentences = subcategoryRefs.map(subcategoryRef => {
      const subCategories = Object.keys(subcategoryRef);
      const manifestations = Object.values(subcategoryRef);
      const manifestationsAsStrings = manifestations.flatMap(manifestation => manifestation.map(manifestation => manifestation.description));

      const struggles = joinExceptLastLike(subCategories);
      const reasons = joinExceptLastLike(manifestationsAsStrings);
      return struggles + ' due to ' + reasons;
    })
    if (sentences.length > 2) {
      return `Student struggles with ` + joinExceptLastLike(sentences, '. They also struggle with ', '. Finally they struggle with') + '.';
    } else {
      return `Student struggles with ` + sentences.join('. They also struggle with ') + '.';
    }
  }

  private getObjective(objectiveDesc: string, subcategories: string[]): ISectionOptions['children'] {
    return [
      new Paragraph({ text: objectiveDesc + ' Objective: ', heading: HeadingLevel.HEADING_3 }),
      ...subcategories.flatMap(subcategory => {
          return [
            new Paragraph({ text: subcategory, heading: HeadingLevel.HEADING_4 }),
            new Paragraph({ text: '    M1   Due:           Completed:          ', leftTabStop: 1}),
            new Paragraph({ text: '' })
          ]
      }),
      new Paragraph({ text: '' })
    ]
  }

  private getStatementAsChildren(header: string, content: string): ISectionOptions['children'] {
    return [
      new Paragraph({ text: header, heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: content }),
      new Paragraph({ text: '' }),
      new Paragraph({ text: '' }),
      new Paragraph({ text: '' })
    ]
  }

  create(userName: string = 'Stub') {
    const title = `Plan for ${userName}`;
    const section: ISectionOptions = {
      children: [
        new Paragraph({ text: 'hello' })
      ]
    }
    const document = new Document({
      title: title,
      sections: [section],
    });
    // document.addParagraph(new Paragraph(title).title());
    // document.addParagraph(this.createHeading('Exception Overview'));
    Packer.toBlob(document).then(blob => {
      fs.saveAs(blob, `${userName}Plan.docx`)
    })
    return document;
  }

  // addSection

  appendManifestation() {

  }

}
