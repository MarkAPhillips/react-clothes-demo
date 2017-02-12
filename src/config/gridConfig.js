import moment from 'moment';

export const columnDefsInitialState = [{
        headerName: 'Order Date',
        field: 'orderDate',
        sort: 'desc',
        cellRenderer: (params) => {
            if (params.value != null) {
                return moment(params.value).format('DD/MM/YYYY');
            } else {
                return '';
            }
        },
        width: 120
    },
    {
        headerName: 'Delivery Country',
        field: 'deliveryCountry',
        width: 200
    },
    {
        headerName: 'Manufacturer',
        field: 'manufacturer',
        width: 200
    },
    {
        headerName: 'Gender',
        field: 'gender',
        width: 120
    },
    {
        headerName: 'Size',
        field: 'size',
        width: 120
    },
    {
        headerName: 'Colour',
        field: 'colour',
        width: 120
    },
    {
        headerName: 'Style',
        field: 'style',
        width: 200
    },
    {
        field: 'year',
        hide: true
    },
    {
        field: 'month',
        hide: true
    }, {
        headerName: 'Count',
        field: 'count',
        width: 100
    }
];