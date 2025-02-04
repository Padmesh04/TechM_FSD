package Task.Utility;

import util.Constants;

    public class LengthOfInteger {

        // Returns the number of digits in a given integer.
        public static int getIntegerLength(int number) {
            int count = 0;
            while (number != 0) {
                count++;
                number = number / 10;
            }
            return count;
        }

        public static void main(String[] args) {
            int sampleNumber = 1234;
            System.out.println(Constants.RESULT_MESSAGE + getIntegerLength(sampleNumber));
        }
    }
