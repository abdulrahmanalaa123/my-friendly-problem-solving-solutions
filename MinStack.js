function ListNode(object,prev){
    this.object =  object === undefined ? {value:Infinity, repeatedTimes:0} : object;
    this.prev = prev === undefined ? null : prev;
}

var MinStack = function(data) {
    // could replace the data with listNode
    this.data = data === undefined ? [] : data;
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.data.push(val);
    if( this.min === null || val < this.min?.object.value){
        const newObject = {value:val,repeatedTimes:0}
        const newNode = new ListNode(newObject,this.min);
        this.min = newNode;
    }else if(val === this.min.object.value){
        this.min.object.repeatedTimes = this.min.object.repeatedTimes + 1 ;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.data.length){
        if(this.data[this.data.length-1] === this.min.object.value){
            if(this.min.object.repeatedTimes > 0){
                this.min.object.repeatedTimes = this.min.object.repeatedTimes-1;
            }else{
                this.min = this.min.prev;
            }
        }
        this.data.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.data.length){
        return this.data[this.data.length-1]
    }else{
        return undefined
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.object.value
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
