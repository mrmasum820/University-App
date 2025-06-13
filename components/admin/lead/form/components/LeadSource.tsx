"use client";

import { AgentsQueryKey, ApiEndPoint } from "@/common/api";
import { getCounselorsList, getSourceList } from "@/common/getDropdown";
import apiConfig from "@/common/http/apiConfig";
import { Card, FormSelect, Grid, useFormContext } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useQuery } from "@tanstack/react-query";
import { LeadSchemaType } from "../lead.form.model";

const LeadSource = () => {
  const {
    form: { watch },
  } = useFormContext();
  const getSourceLists = getSourceList();
  const getCounselorsLists = getCounselorsList();
  const sourceId = watch("lead_complete.source_id");
  const counselorId = watch("lead_complete.counselor_id");
  const getSourceLabel = getSourceLists.find(
    (item) => item?.value === sourceId
  )?.label;
  const { data: getCounselorAgentList } = useQuery({
    queryKey: [AgentsQueryKey.List, counselorId],
    queryFn: async () => {
      const res = await apiConfig.get(ApiEndPoint.LISTS_API);
      const modifyData = res?.data?.items?.map(
        (val: Record<string, number>) => {
          return {
            label: val.name,
            value: val.id,
            connselor_id: val.connselor_id,
          };
        }
      );
      return modifyData || [];
    },
  });
  function getCounselorAgentLists() {
    if (getSourceLabel && counselorId) {
      return getCounselorAgentList?.filter(
        (item: { connselor_id: number }) => item.connselor_id === counselorId
      );
    } else {
      return getCounselorAgentList;
    }
  }
  const getAgentsLists = getCounselorAgentLists() || [];

  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Lead Source" />
        <Card.Body>
          <Grid>
            <Grid.Col>
              <InputLabel>Source</InputLabel>
              <FormSelect<LeadSchemaType>
                name="lead_complete.source_id"
                options={getSourceLists}
              />
            </Grid.Col>
            <Grid.Col>
              <InputLabel>Counselor</InputLabel>
              <FormSelect<LeadSchemaType>
                name="lead_complete.counselor_id"
                options={getCounselorsLists}
                placeholder="Select Counselor"
              />
            </Grid.Col>
            <Grid.Col>
              <InputLabel>
                {getSourceLabel === "Marketer" ? "Marketer" : "Agent"}
              </InputLabel>
              <FormSelect<LeadSchemaType>
                name="lead_complete.agent_id"
                options={getAgentsLists}
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeadSource;
