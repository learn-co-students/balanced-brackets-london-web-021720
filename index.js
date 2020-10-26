// Problem
// Given a string consisting only of the characters (, [, {, ), ], and }, write a function isBalanced() that returns a boolean that determines whether or not every open parentheses or 
// bracket is paired correctly and is balanced.

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. 
// There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. 
// The pair of square brackets encloses a single, unbalancedopening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

const isBalanced = (str) => {
    let answer = str.split("")
    let current = null
    let final = true
    let i = 0
    while (answer.length != 0) {
        current = answer[i]
        if (answer.length % 2 != 0) {
            return false
        }
        if (current === '(') {
            if (answer[i + 1] === ')') {
                answer.splice(i, 2)
                i = 0
            } else {
                if (answer[i + 1] === ']' || answer[i + 1] === '}') {
                    answer = []
                    final = false
                } else {
                    i = i + 1
                }
            }
        } else if (current === '[') {
            if (answer[i + 1] === ']') {
                answer.splice(i, 2)
                i = 0
            } else {
                if (answer[i + 1] === ')' || answer[i + 1] === '}') {
                    answer = []
                    final = false
                } else {
                    i = i + 1
                }
            }
        } else if (current === '{') {
            if (answer[i + 1] === '}') {
                answer.splice(i, 2)
                i = 0
            } else {
                if (answer[i + 1] === ']' || answer[i + 1] === ')') {
                    answer = []
                    final = false
                } else {
                    i = i + 1
                }
            }
        } else {
            return false
        }
    }
    return final
}


