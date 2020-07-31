<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-toolbar color="indigo" dark>
                    <v-toolbar-title
                        >Nhập yêu cầu của hộp giảm tốc</v-toolbar-title
                    >

                    <v-spacer></v-spacer>

                    <!-- <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn> -->
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                        v-model="ConveyorForce"
                        label="Lực vòng trên băng tải F (kN)"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="conveyorSpeed"
                        label="Tốc độ băng tải v (m/ph)"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="workingTime.hours"
                        label="Số giờ làm việc"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="workingTime.shifts"
                        label="Số ca làm việc"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="workingTime.days"
                        label="Số ngày làm việc"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="workingTime.months"
                        label="Số tháng làm việc"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="workingTime.years"
                        label="Số năm làm việc"
                        required
                    >
                    </v-text-field>
                    <v-select
                        v-model="turningDirection"
                        :items="[1, 2]"
                        label="Số chiều quay"
                    ></v-select>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
