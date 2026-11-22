class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        self.helper(head)
    def helper(self, head: Optional[ListNode]) -> ListNode:
        if head is None or head.next is None:
            return head
        last = head
        prev = head
        while last.next:
            prev = last
            last = last.next
        prev.next = None
        next_node = head.next
        head.next = last
        last.next = self.helper(next_node)
        return head
        
        