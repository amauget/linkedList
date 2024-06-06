class ListNode{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(head = null){ /* if "head" is not passed, head is valued as null */
    this.head = head
  }

  append(value){
    let node = this.head
    let lastValue = undefined
    while(node){
      if(node.next === null){
        lastValue = new ListNode(value)
        node.next = lastValue
      }
    }
    return this.head
  }

  prepend(value){
    let newItem = (new ListNode(value))
    newItem.next = this.head
    return newItem
  }

  size(){
    let node = this.head
    let count = 0

    while(node){
      count++
      node = node.next
    }
    return count

  }

  Head(){
    return this.head
  }

  tail(){
    let lastNode = this.head
    if(lastNode){
      while(lastNode.next){
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  at(index){
    let node = this.head
    let count = 0

    while(node){
      if(count === index){
        return node.data
      }
      count++ 
      node = node.next
    }
    return null
  }

  pop(){
    let node = this.head
    let previous = null
    while(node){
      
      if(node.next === null){
        previous.next = null
      }
      previous = node
      node = node.next
    }
    return this.head
  }

  contains(value){ /* returns true if the passed in value is in the list, else false. */
      let node = this.head
      while(node){
        if(node.data === value){
          return true
        }
        node = node.next
      }
      return false
  }

  find(value){
    let node = this.head
    let count = 0
    while(node){
      if(node.data === value){
        return `Index: ${count}`
      }
      node = node.next
      count ++
    }
    return null
  }

  toString(){ /* displays entire list. */
    let node = this.head

    let str = ''

    while(node){
      str += node.data + '->' 
      node = node.next
    }
    str += 'NULL' /* indicates the end of the list. */
    console.log(str)
  }

}


/* Creating list node */

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let node3 = new ListNode(7)
node2.next = node3
/* associating linked list data with node. */
let list1 = new LinkedList(node1)

// console.log(list1.at(1))
console.log(list1.prepend(33))
