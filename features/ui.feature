Feature: Example Feature

  Scenario: Search for a product
    Given I am on the e-commerce website
    When I search for "POCO X6 5G"
    Then I should see results for "POCO X6 5G"
