//components/CustomToolbar.js
//데이터를 CSV로 내보내는 기능을 구현하기 위해 임포트
import { GridToolbarContainer,
    GridToolbarExport,gridClasses } from "@mui/x-data-grid"
function CustomToolbar(){
    return(
        <GridToolbarContainer
            className={gridClasses.toolbarContainer}>
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}
export default CustomToolbar