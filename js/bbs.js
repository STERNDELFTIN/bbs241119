$(function(){
    let selectAll = $('#selectAll');
    let checkBoxes = $('tbody input[type="checkbox"');

    selectAll.on('change', function(){
        // 첫 번째 prop, 두 번째 prop 체크박스의 속성 설정을 의미하며 선택된 상태를 selectAll과 동기화하는 역할 수행
        checkBoxes.prop('checked', $(this).prop('checked'))
    });

    // 체크박스 중 하나라도 해제가 되면 전체 박스도 해제
    checkBoxes.on('change', function(){
        if(!$(this).prop('checked')) {
            // false 체크해제 상태
            selectAll.prop('checked', false);
            // .prop(): 요소의 설정을 가져오거나 설정할 때 사용하는 메서드
        }
    });

    // 삭제
    $('.delete').on('click', function(){
        // 체크박스들 순회
        checkBoxes.each(function(){
            // 현재 체크되어있다면
            if($(this).prop('checked')){
                $(this).closest('tr').remove();
            }
        });
        
        let totalRows = $('tbody tr').length;
        $('tbody tr').each(function(index){
            $(this).find('td').eq(1).text(totalRows - index);
        });

        // 전체 선택된 체크박스들 선택 해제
        selectAll.prop('checked', false);

        // 체크박스 리스트 다시 선택
        checkBoxes = $('tbody input[type="checkbox"');
    });

    // .closet(): 선택된 요소의 조상 요소중 가장 가까운 조상
});