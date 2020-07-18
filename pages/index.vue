<template>
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>
            <div class="text-center">
                <leftGearLogo />
                <!-- <logo />
                <vuetify-logo /> -->
            </div>
            <v-card>
                <v-card-title class="headline"
                    >Chào mừng bạn đến với Auto Machine elements
                </v-card-title>
                <v-card-text>
                    <p>
                        Nếu bạn gặp khó khăn trong quá trình chuẩn bị bản thuyết
                        minh hay thiết kế bản vẽ chế tạo hộp giảm tốc khi làm đồ
                        án chi tiết máy, chúng tôi có thế giúp bạn giải quyết
                        được vấn đề này, bạn có thể sử dụng ứng dụng của chúng
                        tôi để có thể kiểm tra kết quả bản vẽ hoặc thuyết minh.
                        Chúng tôi cũng xây dựng một hệ thống ôn tập và đề cương
                        để giúp bạn ôn tập và chuẩn bị tốt nhất cho việc bảo vệ
                        đồ án
                    </p>
                    <p>
                        Chức năng ôn tập là miễn phí. Tuy nhiên, để duy trì
                        trang web và ứng dụng, quảng cáo có thể sẽ xuất hiện
                        trong quá trình sử dụng chức năng. Phiền bạn hãy tắt các
                        chức năng adblock trước khi sử dụng ứng dụng
                    </p>
                    <p>
                        Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi, chúc bạn
                        sẽ hoàn thành tốt môn đồ án chi tiết máy!
                    </p>

                    <hr class="mt-3" />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="warning" nuxt to="/meproject">Đăng ký</v-btn>
                    <v-btn color="success" nuxt to="/meproject"
                        >Tìm hiểu về hộp giảm tốc</v-btn
                    >
                    <v-btn color="primary" nuxt to="/meproject"
                        >Thiết kế hộp giảm tốc</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import leftGearLogo from "~/components/leftGearLogo.vue"
// import Logo from "~/components/Logo.vue"
// import VuetifyLogo from "~/components/VuetifyLogo.vue"

export default {
    components: {
        leftGearLogo,
        // Logo,
        // VuetifyLogo,
    },
}
</script>
