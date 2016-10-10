module.exports = {
	db: {
		proms: 'mssql://ARGO_APPSERV:argo-proms-2@192.168.0.42/Archiv',
		globus: 'mssql://ARGO_APPSERV:argo-proms-2@192.168.0.42/Globus'
	},
	security: {},
	server: {
		listenPort: 9090,
		securePort: 9434
	}
};