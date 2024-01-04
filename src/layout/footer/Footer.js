import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
function Footer() {
  return (
    <Stack
      sx={{
        width: "100%",
        marginTop: "64px",
        height: "400px",
        alignItems: "start",
        justifyContent: "center",
        backgroundColor: "#000000",
        color: "#FFFFFF",
      }}
    >
      <h1
        style={{
          marginLeft: "6%",
        }}
      >
        About Us
      </h1>
      <h3
        style={{
          marginLeft: "6%",
        }}
      >
        CinesLink
      </h3>
      <Typography style={{ width: "70%", marginLeft: "6%" }}>
        Mang lại dịch vụ video streaming tốt nhất trên thị trường, giúp bạn có
        thể kế nối với tất cả mọi người trên thế chỉ với internet và một cú
        click chuột. Đồng thời chúng tôi cũng mang lại cho bạn những phút giây
        giải trí có một không hai với đa dạng các loại video được stream.
      </Typography>
      <h3
        style={{
          marginLeft: "6%",
        }}
      >
        Contact
      </h3>
      <Stack
        direction={"row"}
        spacing={1}
        style={{
          marginLeft: "6%",
          marginBottom: "10px",
        }}
      >
        <LocationOn />
        <Typography>
          Địa chỉ: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        style={{
          marginLeft: "6%",
          marginBottom: "10px",
        }}
      >
        <LocationOn />
        <Typography>
          Địa chỉ: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        style={{
          marginLeft: "6%",
          marginBottom: "10px",
        }}
      >
        <LocationOn />
        <Typography>
          Địa chỉ: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh
        </Typography>
      </Stack>
    </Stack>
  );
}
export default Footer;
