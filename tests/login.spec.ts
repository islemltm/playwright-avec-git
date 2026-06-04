import {test, expect} from "@playwright/test"
test ('login valide',{tag:'@login'},async({page})=>{
    //aller d abord vers l url
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    // saisir email
     await page.locator("#login-email").fill(" client@boutique.qa")
    // saisir mot de passe 
     await page.locator("[data-testid='login-password']").fill("Client123!")
    // clique sur se connecter
     await page.getByRole("button",{name:"Se connecter"}).click()
    // redirection vers l url boutique
    await expect(page).toHaveURL("https://api.efi-academy.com/e-commerce-test-api/client/shop.php")
})
test ('Login invalide',{tag:["@invalide","@integration"]},async ({page})=>{
    // accéder vers la page d'accueil

    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    // saisir le champ email
    await page.locator("#login-email").fill(" cliefsqfnt@boutique.qa")
    // saisir le champ mot de passe
    await page.locator("[data-testid='login-password']").fill("Cliefsnt123!")
    //cliquer sur le bouton se connecter
    await page.getByRole("button",{name:"Se connecter"}).click()
    // Vérifier que le message d'erreur s'affiche
    await expect(page.locator('[data-testid="form-error"]')).toBeVisible()
})