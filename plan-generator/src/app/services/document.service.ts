import { Injectable } from '@angular/core';
import { Document, Paragraph, Packer, ISectionOptions } from 'docx';
import * as fs from 'file-saver';
import { Category, PredefinedCategory, PredefinedSubcategory } from '../options-tree/options-tree.models';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  generate(name: string, categories: PredefinedCategory[]) {
    const title = `Plan for ${name}`;

    // const subcategories = categories.flatMap(category => category.subCategories);
    const sections = [];
    // sections.push(this.getSection('Problem', this.getProblemStatement(subcategories)));
    // sections.push(this.getSection('Goal', this.getGoalStatement(subcategories)));
    const section: ISectionOptions = {
      children: [
        new Paragraph({ text: 'hello' })
      ]
    }
    
  }

  private getSection(header: string, content: string): ISectionOptions {
    return {
      children: [
        new Paragraph({ text: header }),
        new Paragraph({ text: content })
      ]
    }
  }

  private getGoalStatement(subcategories: PredefinedSubcategory[]) {
    return `Improve ${subcategories.map((subcategory) => subcategory.description).join(', ')} in order to score at a proficient level`;
  }

  private getProblemStatement(subcategories: PredefinedSubcategory[]) {
    const getSubcategoryStatement = (subCategory: PredefinedSubcategory) => {
      const manifestationDescs = subCategory.manifestations.map(manifestation => manifestation.description);
      return `${subCategory.description} due to ${manifestationDescs.join(', ')}`
    }
    const subcategoryStatements = subcategories.map(subcategory => getSubcategoryStatement(subcategory));
    return `Student struggles with ${subcategoryStatements.join(', and ')}`;
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
