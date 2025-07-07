Feature: Ecommerce validation
   @Regression
    Scenario: Pacing the order
        Given a login to Ecommerce application with "rahulshetty@gmail.com" and "Iamking@000"
        When Add "ZARA COAT 3" to Cart
        Then Verify "ZARA COAT 5" is displayed in the Cart    
		When Enter valid details and Place the Order
		#Then Verify order is present in the OrderHistory


        Scenario: Pacing the order ADIDAS ORIGINAL
        Given a login to Ecommerce application with "rahulshetty@gmail.com" and "Iamking@000"
        When Add "ADIDAS ORIGINAL" to Cart
        Then Verify "ADIDAS ORIGINAL" is displayed in the Cart    
		When Enter valid details and Place the Order
		#Then Verify order is present in the OrderHistory