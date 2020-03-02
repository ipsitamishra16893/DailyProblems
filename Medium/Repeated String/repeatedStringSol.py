#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the repeatedString function below.
def repeatedString(s, n):
    if n != 0 and s:
      countInS=0
      indices =[]
      for x in range(len(s)):
        if s[x]=='a':
          countInS+=1
          indices.append(x)

      multiplier = int(n/len(s))
      partMultiplier = n-(len(s)*multiplier)

      partCount=0
      for a in indices:
        if a<partMultiplier:
          partCount+=1

      if len(s)*multiplier<n:
        countInBigS=(countInS*multiplier)+partCount
      else:
        countInBigS=(countInS*multiplier)

      print(multiplier)
      print(partMultiplier)
      print(countInBigS)
      return countInBigS
      
    return 0


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()
