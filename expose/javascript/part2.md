
1.) Line 12 will print the value of i because console.log prints to the console and i has been declared using the var keyword, meaning that it can be accessed anywhere within the function.

2.) Line 13 will print the value of discountedPrice because console.log prints to the console and discountedPrice has been declared using the var keyword, meaning that it can be accessed anywhere within the function. 

3.) Line 14 will print the value of finalPrice because console.log prints to the console and finalPrice has been declared using the var keyword, meaning that it can be accessed anywhere within the function. 

4.) This function will return an array called discounted which contains all of the final prices. The array discounted is declared in the function discountPrices meaning that it is accessible throughout the entire function. Then the array is filled using a for loop that calculates each final price and pushes it into discounted.

5.) Line 12 will return an error because the variable i was defined inside the for loop, using let, and therefore can only be accessed within that block

6.) Line 13 causes an error because discountedPrice has been defined within a for loop using the let keyword, therefore it is only accessible within that block. It cannot be accessed from line 13 because it is outside of the block (loop).

7.) Line 14 will print the value of finalPrice, which will be the value of the final price of the last value from prices. This is because finalPrice was declared within the block that contains line 14 and the value of finalPrice will be changed to the final price of the last value from prices just before it is printed to the console.

8.) This function will return all of the final prices that were pushed to the discounted array because the fiscounted array was defined within the same block as the return statement.

9.) Line 11 will cause an error because the variable i has been declared using the let keyword within the for loop, this means that it is only accessible within the for loop. Line 11 is outside of the for loop and therefore cannot access the variable i.

10.) Line 12 will print prices.length, as this is what was assigned to length when it was intialized. Line 12 is contained within the block where length was initialized, therefore there are no errors.

11.) This function will return discounted as an empty array. Discounted was initialized as an empty array using the const keyword. This means that the value of discounted cannot be changed later on, therefore it reamins empty.

12.) A.) student.name

     B.) student.major[Grad Year]

     C.) student.greeting.function()

     D.)student[Favorite Teacher].name

     E.) student.courseLoad[0]

13.) A.) 5 because strings are converted to numbers

     B.) 1 because strings are converted to numbers

     C.) 3 becuase null is converted to 0

     D.) 3null because when you concatenate a string and a non string data type the non string is converted into a string, and null just 
         converts into the string null and they are later concatenated.

     E.) 4 because true converts into a numeric value (1) and is added to 3.

     F.) 0, because when + is used with non numeric values, JavaScript tries to convert them into numeric values and then adds them 
        together. False and null both translate to 0 numeric values, so adding them together gives us 0.

     G.) 3undefined, because "3" is a string, JavaScript tries to convert undefined into a string, which is just "undefined"

     H.) Nan becuase when we use the - operator JavaScript tries to convert the string value into a numeric value and then perform the 
         subtraction, but undefined cannot be directly translated into a numeric value, therefore we get Nan.

14.) A.) True, the string "2" becomes the numeric value 2 which is indeed greater than 1.

     B.) True, the two strings are compared lexicographically, and since 12 is greater than 2 lexicographically, the operator outputs 
         true.

     C.) True, because the string 2 is converted into the numeric value 2, which is equal to the numeric value 2.

     D.) False, the ==== operator checks if 2 values are strictly equivalent without any type conversions.

     E.) False, true is converted to its numerical value which is 1. 1 is not equal to 2 and therefore the output is false.

     F.) True, Boolean(2) converts the number 2 into a boolean value which is true. Now both values are of the same type and are both 
         true, meaning they are strictly equivalent, hence why we get true.

15.) == checks if the values are equal regardless of their type. Using this operator, two values of different type can be equivalent. 
      On the other hand, === checks if values are strictly equivalent, meaning not only do the values have to be the same, but the data 
      types must also be the same.

17.) The result would be newArray[2, 4, 6]. Before pushing each value into the array, the modifyArray function calls the doSomething 
     function on each value, which just multiplies each value by 2, leaving us with the above array.

19.) 1 4 3 2 

     
  
