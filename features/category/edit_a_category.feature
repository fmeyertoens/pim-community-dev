Feature: Edit a category
  In order to be able to modify the category tree
  As a user
  I need to be able to edit a category

  Background:
  Given the following categories:
    | code        | title       |
    | computers   | Computers   |
    | laptops     | Laptops     |
    | hard_drives | Hard drives |
    | pcs         | PC's        |
  And I am logged in as "admin"

  Scenario: Edit a category
    Given I edit the "Laptops" category
    And I change the Code to "notebooks"
    And I save the category
    Then I should be on the category "notebooks" edit page
    And I should see "Tree successfully updated"

  @javascript
  Scenario: Go to category edit page from the category tree right click menu
    Given I am on the categories page
    And I right click on the "Computers" category
    And I click on "Edit" in the right click menu
    Then I should be on the category "computers" edit page
