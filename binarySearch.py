def binarySearh(arr,num):
    start = 0
    end = len(arr) - 1

    while(end >= start):
        mid = (start + end)//2
        if (arr[mid] == num):
            return mid
        elif (arr[mid] > num):
            end = mid - 1
        else:
            start = mid + 1
    return -1


arr = [1,2,3,4,5]
print(binarySearh(arr,4))
