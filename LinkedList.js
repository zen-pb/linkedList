class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value) {
        if (this.head == null) {
            this.prepend(value)
        }
        else {
           let temp = this.head;
           while(temp.nextNode != null) {
            temp = temp.nextNode;
           }

           temp.nextNode = new Node(value, null)
        }
    }

    prepend(value){
        this.head = new Node(value, this.head)
    }

    size(){
        let counter = 0;
        let temp = this.head;
        while(temp.nextNode != null) {
            counter += 1;
            temp = temp.nextNode;
        }

        return counter;
    }

    head(){
        return this.head;
    }

    tail(){
        if (!this.head) return null;

        let temp = this.head;
        while(temp.nextNode != null) {
        temp = temp.nextNode;
        }

        return temp;
    }

    at(index){

    }

    pop(){

    }

    contains(value){

    }

    find(value){

    }

    toString(){

    }

    insertAt(value, index){

    }

    removeAt(index){

    }
}

class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}