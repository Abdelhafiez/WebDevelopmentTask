//Meteor.subscribe('departments');
Template.Departments.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('departments');
	});
});
Template.Departments.helpers({
	departments: ()=> {
		return Departments.find({});
	}
});