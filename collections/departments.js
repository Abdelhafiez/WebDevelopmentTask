Departments = new Mongo.Collection('departments');
Departments.allow({
	insert: function(userId, doc){
		return !!userId;
	}
});


Book = new SimpleSchema({
	title: {
		type: String
	},
	amount: {
		type: String
	},
	price: {
		type: String
	}
});




DepartmentSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	books: {
		type: [Book]
	},
	isAvailable: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Departments.attachSchema( DepartmentSchema );