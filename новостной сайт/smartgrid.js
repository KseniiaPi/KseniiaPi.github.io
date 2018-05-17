const smartgrid = require('smart-grid');

const settings = {
	columns: 12,
	offset: '20px',
	container: {
		maxWidth: '1259px',
		fields: '20px'
	},
	breakPoints: {
		superlarge: {
			width: "2320px",
			fields: "20px"
		},
		lg: {
			width: "1260px",
			fields: "20px"
		},
		md: {
			width: "992px",
			fields: "20px"
		},
		sm: {
			width: "720px",
			fields: "10px"
		},
		xs: {
			width: "576px",
			fields: "5px"
		},
		xxs: {
			width: "380px",
			fields: "5px"
		}
	},
	oldSizeStyle: false,
	properties: [
        'justify-content'
    ]
};

smartgrid('./src/css', settings);
