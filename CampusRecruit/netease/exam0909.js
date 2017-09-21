var print = console.log;
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var readline = __readline.prompt;

/*while (lines = readline()) {
    let counter = 0;
    let groups = 0;
    for (let i = 0; i < lines.length; i++) {
        counter++;
        while (i + 1 < lines.length && lines.charAt(i) == lines.charAt(i + 1)) {
            counter++;
            i++;
        }
        groups++;
    }
    print((lines.length / groups).toFixed(2));
}*/

while (lines = readline()) {
	let n = parseInt(lines);
	let nowVal = 0;
	const res = [];
	function solve(n, nowVal, res) {
		if (nowVal == n) {
			for (let i = 0; i< res.length; i++) {
                print(res[i]);
            }
            return true;
        }
        if (nowVal > n) {
            return false;
        }
        res.push('1');
        if (solve(n, nowVal * 2 + 1, res)) {
            return true;
        }
        res.pop(res.length - 1);
        res.push('2');
        if (solve(n, nowVal * 2 + 2, res)) {
            return true;
        }
        res.remove(res.length - 1);
        return false;
    }
	
        
    
    print((lines.length / groups).toFixed(2));
}


/*
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = getScanner(System.in);
//        Scanner in = getScanner("input.txt");
        while (in.hasNext()) {
            int n = in.nextInt();
            solve(n, 0, new ArrayList<Character>());
        }
        in.close();
    }

    private static boolean solve(int n, int nowVal, List<Character> res) {
        if (nowVal == n) {
            for (char e : res) {
                System.out.print(e);
            }
            System.out.println("");
            return true;
        }

        if (nowVal > n) {
            return false;
        }
        res.add('1');
        if (solve(n, nowVal * 2 + 1, res)) {
            return true;
        }
        res.remove(res.size() - 1);
        res.add('2');
        if (solve(n, nowVal * 2 + 2, res)) {
            return true;
        }
        res.remove(res.size() - 1);
        return false;
    }

    //从输入流读取输入数据
    public static Scanner getScanner(InputStream is) {
        return new Scanner(is);
    }

    //从文件读取输入数据
    public static Scanner getScanner(String fileName) {
        try {
            return getScanner(new FileInputStream(fileName));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

}*/



	/*function getLen(lines) {
		const arr = [];
		let result = 0;
		let j = 0;
		for(let i = 0; i < lines.length; i++) {
			if(lines[i] != lines[i+1]) {
				arr[j++] = i;
			}
		}
		for(let k = 0; k < arr.length; k++) {
			result += arr[k];
		}
		return (result/(arr.length)).toFixed(2);
	}

}


public class Main {
    public static void main(String[] args) {
        Scanner in = getScanner(System.in);
        while (in.hasNext()) {
            String line = in.next().trim();
            int counter = 0;
            int groups = 0;
            for (int i = 0; i < line.length(); i++) {
                counter++;
                while (i + 1 < line.length() && line.charAt(i) == line.charAt(i + 1)) {
                    counter++;
                    i++;
                }
                groups++;
            }
            System.out.printf("%.2f\n",line.length() * 1.0 / groups);
        }
        in.close();
    }

    //从输入流读取输入数据
    public static Scanner getScanner(InputStream is) {
        return new Scanner(is);
    }

    //从文件读取输入数据
    public static Scanner getScanner(String fileName) {
        try {
            return getScanner(new FileInputStream(fileName));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

}

*/