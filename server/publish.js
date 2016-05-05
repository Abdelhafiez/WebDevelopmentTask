Meteor.publish('departments',function(){
	return Departments.find({author: this.userId});
});