/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const randoms = new Map([])
    let dummy = new Node();
    let root = dummy;

    while(head){
        if(randoms.has(head)){
            addRandom(randoms,head,randoms.get(head))
            dummy.next = randoms.get(head);
        }else{
            const copyNode = new Node(head.val)
            // the settings solves the self pointed nodes
            randoms.set(head,copyNode)
            addRandom(randoms,head,copyNode)
            dummy.next = copyNode;
        }
        dummy = dummy.next
        head = head.next;
    }
    return root.next
};

function addRandom(randomsObject,head,copy){
    if(head.random){
        if(!randomsObject.has(head.random)){
            const randomNodeCopy = new Node(head.random.val)
            randomsObject.set(head.random, randomNodeCopy)
        }
        copy.random = randomsObject.get(head.random);
    }else{
        copy.random = null;
    }
}
