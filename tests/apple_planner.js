describe('Apple buying data', function() {

	it ('should allow to enter price of the box of apples', function() {

		const applePlanner = ApplePlanner();

		applePlanner.setBoxPrice(5);

		assert.equal(5, applePlanner.getBoxPrice());
	});

    it ('should allow to enter number of apples in the box', function() {

		const applePlanner = ApplePlanner();

		applePlanner.setNoApples(1);

		assert.equal(1, applePlanner.getNoApples());
	});

    it ('should allow to enter number of apples in the box', function() {

		const applePlanner = ApplePlanner();

		applePlanner.setPacketSize(1);

		assert.equal(1, applePlanner.getPacketSize());
	});

    it ('should allow to enter required profit', function() {

		const applePlanner = ApplePlanner();

		applePlanner.setProfit(1);

		assert.equal(1, applePlanner.getProfit());
	});


    describe("Apple price calculation", function () {
        // it ('should return number of packets', function() {

        //     const applePlanner = ApplePlanner();
    
        //     // applePlanner.setProfit(1);
    
        //     assert.equal(1, applePlanner.getProfit());
        // });  

        // it ('should return cost price per apple', function() {

        //     const applePlanner = ApplePlanner();
    
        //     // applePlanner.setProfit(1);
    
        //     assert.equal(1, applePlanner.getProfit());
        // });  

        // it ('should return cost price per packet', function() {

        //     const applePlanner = ApplePlanner();
    
        //     // applePlanner.setProfit(1);
    
        //     assert.equal(1, applePlanner.getProfit());
        // });  

        // it ('should return recommended packet price', function() {

        //     const applePlanner = ApplePlanner();
    
        //     // applePlanner.setProfit(1);
    
        //     assert.equal(1, applePlanner.getProfit());
        // });  
    });   
});    