class Solution:
    def hasCycle(self, head):
        while head:
            if head.val == None:
                return True
            head.val = None
            head = head.next

        return False


        