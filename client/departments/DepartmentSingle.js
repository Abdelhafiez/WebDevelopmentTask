//Meteor.subscribe('departments');
Template.DepartmentSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('departments');
	});
});
Template.DepartmentSingle.helpers({
	
	department: ()=> {
		var id = FlowRouter.getParam('id');
		return Departments.findOne({_id: id});
	}
});