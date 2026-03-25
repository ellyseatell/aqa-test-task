import { Page, Locator, expect } from '@playwright/test';

export interface EditTeamOptions {
  newName?: string;
  newDescription?: string;
  addMembers?: string[];
  removeMembers?: string[];
}

export class EditteamPage {
readonly page: Page;
readonly saveteambtn: Locator; // submits the form


  constructor(page: Page) {
    this.page = page;
    this.saveteambtn = page.locator(`xpath=//button[@type='submit']`);

  }

  
//Edit team name 

async editTeamFlex(teamname: string, options: EditTeamOptions) {
  // Locate the team to be edited in the list.
  //const teamItem = this.page.locator('.teams.box li > a', { hasText: teamname });
  //await expect(teamItem).toBeVisible();

  // Click on it to enter the edit mode.
 // const editBtn = teamItem.locator('button:has-text("Edit")');
  //await expect(editBtn).toBeVisible();
  //await editBtn.click();

  // Update team name if provided
  if (options.newName) {
    const nameInput = this.page.locator('input[id="teamtext"]');
    await nameInput.fill(options.newName);
  }

  // Update description if provided
  if (options.newDescription) {
    const descInput = this.page.locator('div[role="textbox"]');
   await descInput.fill(options.newDescription);
   //this one is a better approach but its not working
   //  await descInput.evaluate(el => el.innerText = 'This is a test description');

    }
  
/*
  // Add members if provided
  if (options.addMembers?.length) {
    for (const member of options.addMembers) {
      const addMemberInput = this.page.locator('input[name="addMember"]');
      await addMemberInput.fill(member);
      const addBtn = this.page.locator('button:has-text("Add Member")');
      await addBtn.click();
    }
  }

  // 6️⃣ Remove members if provided
  if (options.removeMembers?.length) {
    for (const member of options.removeMembers) {
      const memberRow = this.page.locator('.member-list li', { hasText: member });
      const removeBtn = memberRow.locator('button:has-text("Remove")');
      await removeBtn.click();
    }
  }*/

   // Save changes
    await expect(this.saveteambtn).toBeVisible();
    await this.saveteambtn.click();

  console.log(`Team "${teamname}" edited with options:`, options);
}


//
  
  async expectDeleteTeamValidation(expectedText?: string) {
  // Locate the delete validation paragraph
  const validationParagraph = this.page.locator('.delete-team-validation'); // adjust selector

  // Ensure it is visible
  await expect(validationParagraph).toBeVisible();

  // If expected text is provided, check exact text
  if (expectedText) {
    await expect(validationParagraph).toHaveText(expectedText);
  }

  console.log('Delete validation paragraph is visible:', await validationParagraph.textContent());
}


async deleteTeam() {
    //delete team then confirm so we sill have to add a locator here.
  const confirmDeleteBtn = this.page.locator(''); // adjust text if needed
  await expect(confirmDeleteBtn).toBeVisible();
  await confirmDeleteBtn.click();
  console.log('Clicked confirm delete button');
}
 }

