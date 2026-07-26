import {Locator,Page} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator
    readonly applogo: Locator
    readonly leftNavigationPanel: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameInput=page.getByRole('textbox', { name: 'Username' });
        this.passwordInput=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
        this.errorMessage=page.getByText('Invalid credentials');
        this.applogo=page.locator(".oxd-sidepanel-header");
        this.leftNavigationPanel=page.locator(".oxd-sidepanel-body");


    }

    //Business library methods

    /**
     * To Launch application.
     */
    async goToOrangeHrm(){
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
    }

    /**
     * To Login to application.
     */
    async loginToHrm(userName:string,password:string){
        await this.usernameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }




}