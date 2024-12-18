describe("automation test store", () => {
  it("registration", () => {
    cy.visit("https://automationteststore.com/");
    cy.Registration("newusername1122345");
    cy.get(".maintext").should("contain", "Your Account Has Been Created!");
  });

  it("edit account details", () => {
    cy.visit("https://automationteststore.com/");
    cy.Logging("newusername1122345");
    cy.get(".side_account_list > :nth-child(3) > a").click();
    cy.get("#AccountFrm_firstname").type("test");
    cy.get("#AccountFrm_lastname").type("test");
    cy.get("#AccountFrm_email").type("test");
    cy.get("#AccountFrm_telephone").type(5646456456);
    cy.get("#AccountFrm_fax").type(354353);
    cy.get(".col-md-12 > .btn-orange").click();
    cy.get(".alert").should(
      "contain",
      "Success: Your account has been successfully updated."
    );
  });

  it("manage address book", () => {
    cy.visit("https://automationteststore.com/");
    cy.Logging("newusername1122345");
    cy.get(".side_account_list > :nth-child(5) > a").click();
    cy.get("#AddressFrm_address_1").type("new address");
    cy.get("#AddressFrm_address_2").type("new address");
    cy.get("#AddressFrm_city").type("new address");
    cy.get("#AddressFrm_postcode").type(7657);
    cy.get("#AddressFrm_country_id").select("Argentina");
    cy.get("#AddressFrm_zone_id").select("157");
    cy.get("#AddressFrm_default1").click();
    cy.get(".col-md-12 > .btn-orange").click();
    cy.get(".alert").should(
      "contain",
      "Your address has been successfully updated"
    );
  });

  it("change password", () => {
    cy.visit("https://automationteststore.com/");
    cy.Logging("newusername1122345");
    cy.get(".side_account_list > :nth-child(4) > a").click();
    cy.get("#PasswordFrm_current_password").type("newusername1122345");
    cy.get("#PasswordFrm_password").type("fdjsfdsf");
    cy.get("#PasswordFrm_confirm").type("fdjsfdsf");
    cy.get(".col-md-12 > .btn-orange").contains("edit").click();
  });
});
