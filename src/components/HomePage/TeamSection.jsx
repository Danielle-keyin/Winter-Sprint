import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const team = [
  {
    name: "Emily Carter",
    role: "Sales Manager",
    photo: "/emily.jpg",
  },
  {
    name: "James Watson",
    role: "Vehicle Specialist",
    photo: "/james.jpg",
  },
  {
    name: "Christina Lee",
    role: "Marketing Director",
    photo: "/sophia.jpg",
  },
  {
    name: "Allan Smith",
    role: "Service Advisor",
    photo: "/daniel.jpg",
  },
];

const TeamSection = () => {
  return (
    <div style={styles.wrapper}>
      <Title level={2} style={styles.title}>
        Our Team
      </Title>
      <Row gutter={[24, 24]} justify="start">
        {team.map((member, i) => (
          <Col xs={24} sm={12} md={12} lg={6} key={member.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                hoverable
                className="brand-card"
                cover={
                  <img
                    alt={member.name}
                    src={member.photo}
                    style={styles.photo}
                  />
                }
                bodyStyle={{ textAlign: "center", padding: "20px" }}
              >
                <div style={styles.textBlock}>
                  <h4 style={styles.name}>{member.name}</h4>
                  <Paragraph style={styles.role}>{member.role}</Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "60px 20px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    margin: "40px 0",
  },
  title: {
    textAlign: "left",
    color: "#000",
    marginBottom: "32px",
  },
  photo: {
    height: "300px",
    objectFit: "cover",
    width: "100%",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  name: {
    color: "#000",
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
  },
  role: {
    color: "#888",
    fontSize: "12px",
    textTranform: "uppercase",
    margin: 0,
    letterSpacing: "0.5px",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    marginTop: "12px",
  },
};

export default TeamSection;
