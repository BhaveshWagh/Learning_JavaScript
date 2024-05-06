// Print Minimum Length String solved in python b'coz user input is not available
// https://course.acciojob.com/idle?question=a9395320-bc5f-4842-b72c-3629a3910662
function printMinLengthString(strings) {
    let minLength = Infinity;
    let minString = '';

    for (let str of strings) {
        if (str.length < minLength) {
            minLength = str.length;
            minString = str;
        }
    }

    console.log(minString);
}

// class Solution:
// def printMinString(self,strings):
// min_length = float('inf')
// min_string = ''
// for string in strings:
//     if len(string) < min_length:
//         min_length = len(string)
//         min_string = string
// print(min_string)


// if __name__=='__main__':
// n=int(input())
// sentence =[]

// for i in range(n):
// sentence.append(input())
// Obj = Solution()
// Obj.printMinString(sentence)