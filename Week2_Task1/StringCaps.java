package Task.Week2_Task1;

public class StringCaps {
    public static void main(String[] args) {
        String s = "HelloWorld";
        System.out.println(1 + 'a');
        char[] chars = s.toCharArray();
        for (int i = 0; i < chars.length; i += 2) {
            if (!(chars[i] > 65 && chars[i] < 91)) {
                int k = chars[i] - 32;
                chars[i] = (char) k;
            }

        }
        String update = String.valueOf(chars);
        System.out.println(update);
    }
}