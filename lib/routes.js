FlowRouter.route('/',{
	name: 'home',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/library',{
	name: 'library',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'Departments'});
	}
});


FlowRouter.route('/department/:id',{
	name: 'library',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout',{main: 'DepartmentSingle'});
	}
});