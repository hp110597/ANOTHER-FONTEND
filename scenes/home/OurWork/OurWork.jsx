import React from 'react'
import styles from './style.module.css'
import Text from '../../../components/Text'



const OurWork = () => {
    const leftContent = [
        'Quản lý xây dựng kênh',
        'Hỗ trợ đàm phán hợp tác',
        'Bảo mật kênh cá nhân',
        'Đảm bảo quyền lợi'];
    const rightContent = [
        'Đội ngũ sản xuất content chuyên nghiệp',
        'Cung cấp dịch vụ hàng đầu (ekip)',
        'Hỗ trợ online 247']
    const renderTextList = (list) => {
        return list.map((text, index) => {
            return <Text
                content={`${index + 1}. ${text}`}
                fontSize={{ sm: '20px', xs: '10px' }}
                textAlign={{ sm: 'justify', xs: 'center' }}
                lineHeight={{ sm: '50px', xs: '30px' }}
                startY={'200%'}
                duration={'1s'}
                delay={`${index * 0.2}s`}
            />
        })
    };

    return (
        <div className={styles.ourWork}>
            <div className={styles.container}>
                <div className={styles.leftBox}>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <Text
                                content={'Quản trị KOLs'}
                                fontSize={{ sm: '24px', xs: '16px' }}
                                bold
                                letterSpacing={'0.2em'}
                                textAlign='center'
                                startY={'200%'}
                                duration={'1s'}

                            />
                        </div>
                        <div className={styles.list}>
                            {renderTextList(leftContent)}
                        </div>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <Text
                                content={'Art Studio'}
                                fontSize={{ sm: '24px', xs: '16px' }}
                                bold
                                letterSpacing={'0.2em'}
                                textAlign='center'
                                startY={'200%'}
                                duration={'1s'}
                            />
                        </div>
                        <div className={styles.list}>
                            {renderTextList(rightContent)}
                        </div>
                    </div>
                    <div className={styles.verticalLine}></div>
                </div>
            </div>
        </div>
    )
}

export default OurWork