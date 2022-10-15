import { useEffect, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { Header } from "../../components/Header";
import { useAddData } from "../../store/hooks/actions/useAddData";
import { StatusCol } from "../../components/StatusCol";
import { GlobalStyles, Body, Row, Col } from "./UI";

function App() {
  const data = useFetchData();
  const updateData = useAddData();

  useEffect(() => {
    updateData(data);
  }, [data]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body>
        <Col>
          <Row>
            <StatusCol title="Todo" status="PENDING" />
          </Row>
          <Row>
            <StatusCol
              title="rejected"
              status="REJECTED"
              allowedDropStatus={["DONE"]}
            />
          </Row>
        </Col>
        <Col>
          <StatusCol
            title="Done"
            status="DONE"
            allowedDropStatus={["PENDING", "REJECTED"]}
          />
        </Col>
      </Body>
    </>
  );
}

export default App;
