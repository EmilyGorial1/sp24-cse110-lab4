
1.) The bug in the code is that we are using .value to retrieve the values, which reads the values in as strings regardless of their data type. This is an issue, because later when the the program tries to add the values together, it just concatenates the two strings together.

2.) In order to fix this bug, I would use the parseInt() function to convert the string values into integer values when calculating the result.

![fix](https://github.com/EmilyGorial1/sp24-cse110-lab4/assets/146862114/e99a89b4-bedd-4908-b46e-aaf16d6dc161)


