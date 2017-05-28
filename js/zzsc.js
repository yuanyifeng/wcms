$(document).ready(function() {
	$('#pagination-demo').twbsPagination({
		totalPages: 15,
		visiblePages: 7,
		startPage: 1,
		first: "首页",
		prev: "上一页",
		next: "下一页",
		last: "未页",
		href: "javascript:void(0)"
//		onPageClick: function(event, page) {
//			var page_para = page_url + "&page=" + page;
//			$.ajax({
//				url: "list.php",
//				type: "GET",
//				dataType: "json",
//				data: page_para,
//				success: function(data) {
//					if (data.code == 0) {
//						//todosomething  
//					} else {
//						//todosomething  
//					}
//				}
//			});
//		}
	});
//	$('#pagination-demo').twbsPagination({
//		totalPages: 35,
//		visiblePages: 7,
//		version: '1.1',
//		//      onPageClick: function (event, page) {
//		//          $('#page-content').text('Page ' + page);
//		//      }
//	});
//
//	$('#navigation').affix({
//		offset: {
//			top: 200
//		}
//	});
//
//	$('#pagination-demo-v1_0').twbsPagination({
//		totalPages: 15,
//		version: '1.0'
//	});
//
//	$('#pagination-demo-v1_1').twbsPagination({
//		totalPages: 15,
//		version: '1.1'
//	});
//
//	$('#visible-pages-example').twbsPagination({
//		totalPages: 35,
//		visiblePages: 10,
//		version: '1.1'
//	});

});