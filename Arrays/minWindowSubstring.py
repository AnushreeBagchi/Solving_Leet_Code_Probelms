# Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
# Leet code - hard
from collections import Counter 
def minWin(s, t):
    dict_t = Counter(t)  #unique characters in t
    required = len(dict_t) #length of unique characters
    l=0
    r=0
    formed = 0 #tracks how many unique characters in t are in current window
    window_count = {} #unique characters in current window
    ans = float("inf"), None, None # tuple (window_length, left, right)
    while r < len(s):
        character = s[r]
        window_count[character] = window_count.get(character, 0) + 1
        if character in dict_t and window_count[character] ==  dict_t[character]:
            formed+=1
        while l<=r and formed == required:
            character = s[l]
            if r-l+1 < ans[0]:
                ans = (r-l+1, l, r) # saving the smallest window till now
            
            window_count[character] -=1
            if character in dict_t and window_count[character] < dict_t[character]:
                formed-=1
            l+=1
        r += 1
    return s[ans[1]: ans[2]+1]


s = "ABAACBAB"
t = "ABC"
print(minWin(s,t))

# TimeComplexity : O(s+t) -> O(n)
# Space complexity : O(s+t) -> s = window dict
#                             t : unique t dict 