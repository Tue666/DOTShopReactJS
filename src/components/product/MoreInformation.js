import { styled } from '@mui/material/styles';

import Title from '../Title';

const MoreInformation = () => (
    <>
        <Title>More information</Title>
        <Table>
            <tbody>
                <tr>
                    <td className="title">Thương hiệu</td>
                    <td>Vua cua</td>
                </tr>
                <tr>
                    <td className="title">Xuất xứ thương hiệu</td>
                    <td>Việt Nam</td>
                </tr>
                <tr>
                    <td className="title">Xuất xứ</td>
                    <td>Việt Nam</td>
                </tr>
                <tr>
                    <td className="title">Hướng dẫn bảo quản</td>
                    <td>Bảo quản đông lạnh : 90 ngày, tủ mát 15 ngày</td>
                </tr>
                <tr>
                    <td className="title">Hướng dẫn sử dụng</td>
                    <td>Bánh mì có thể chiên lửa vừa trong vòng 2-3p với chảo dầu thật nóng (nên dùng giấy
                        thấm dầu sau khi chiên) ,hấp 7-10 phút hoặc Chiên lại bằng nồi chiên không dầu: do bánh vào nồi
                        chiên không dầu, chỉnh thời gian 30s và 180 độ C.</td>
                </tr>
            </tbody>
        </Table>
    </>
);

const Table = styled('table')(({ theme }) => ({
    width: '100%',
    '& td.title': {
        width: '35%',
        backgroundColor: theme.palette.background.default
    },
    '& td': {
        borderBottom: `2px solid ${theme.palette.background.default}`,
        borderTop: `2px solid ${theme.palette.background.default}`,
        padding: '15px'
    }
}));

export default MoreInformation;
