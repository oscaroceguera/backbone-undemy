
	var timelineView = new com.eduonix.view.Timelineview()
	var profileView = new com.eduonix.view.ProfileView()
	var searchModel = new com.eduonix.model.Search()
	var searchView = new com.eduonix.view.SearchView({model: searchModel})
	var appRouter = new com.eduonix.router.AppRouter({searchModel: searchModel})
	Backbone.history.start();
