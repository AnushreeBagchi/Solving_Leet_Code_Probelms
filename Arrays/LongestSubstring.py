# // Longest substring without repeating characters

def longestSubstring(str):
    str_list = []
    max_length = 0
    for x in str:
        if x in str_list:
            str_list = str_list[str.index(x)+1:]
        
        str_list.append(x)
        max_length=max(max_length, len(str_list))
    return max_length
print("Pass" if longestSubstring("abcabcbb") == 3 else "Fail")
print("Pass" if longestSubstring("bbbbb") == 1 else "Fail")
print("Pass" if longestSubstring("pwwkew") == 3 else "Fail")

Time complexity: O(n)