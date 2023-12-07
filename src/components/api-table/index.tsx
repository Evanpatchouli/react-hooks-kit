import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Chip } from "@mui/material";

type DataProps = {
  name: string;
  type: "number" | "string" | "ReactNode" | "boolean" | (string & {}) | "object" | object;
  defaultValue?: any;
  desc: React.ReactNode;
  details?: React.ReactNode;
  properties?: DataProps[];
};

type DataPreHandled = {
  name: string;
  type: string;
  defaultValue?: string | JSX.Element;
  desc?: React.ReactNode;
  details?: React.ReactNode;
  properties: DataPreHandled[];
};

const StringTag = <Chip label="string" color="primary" />;
const NumberTag = <Chip label="number" color="secondary" />;
const BooleanTag = <Chip label="boolean" color="success" />;
const ObjectTag = <Chip label="object" color="info" />;
const ReactNodeTag = <Chip label="ReactNode" color="warning" />;
const UndefinedTag = <Chip label="undefined" color="info" variant="outlined" />;
const NullTag = <Chip label="null" color="error" variant="outlined" />;
const AnyTag = <Chip label="any" color="secondary" variant="outlined" />;
const UnknownTag = <Chip label="unknown" color="error" />;
const NeverTag = <Chip label="never" color="error" />;
const VoidTag = <Chip label="void" color="primary" variant="outlined" />;
const SymbolTag = <Chip label="symbol" color="error" />;
const BigIntTag = <Chip label="bigint" color="error" />;
const FunctionTag = <Chip label="function" color="primary" variant="outlined" />;
const ArrayTag = <Chip label="array" color="error" />;

const Tag = (type: string | object): any => {
  if (typeof type === "object") {
    return type;
  }
  if (!type.includes("|") && !type.includes("&")) {
    switch (type) {
      case "string":
        return StringTag;
      case "number":
        return NumberTag;
      case "boolean":
        return BooleanTag;
      case "object":
        return ObjectTag;
      case "ReactNode":
        return ReactNodeTag;
      case "undefined":
        return UndefinedTag;
      case "null":
        return NullTag;
      case "any":
        return AnyTag;
      case "void":
        return VoidTag;
      case "function":
        return FunctionTag;
      default:
        return <Chip label={type} color="default" />;
    }
  } else {
    // 拆分后递归调用
    if (type.includes("|")) {
      return type
        .split("|")
        .map((t) => Tag(t.trim()))
        .map((t, idx, arr) => (
          <React.Fragment key={t.props.label}>
            {t}
            {arr.length - 1 === idx ? null : " | "}
          </React.Fragment>
        ));
    }
    if (type.includes("&")) {
      return type
        .split("&")
        .map((t) => Tag(t.trim()))
        .map((t, idx, arr) => (
          <React.Fragment key={t.props.label}>
            {t}
            {arr.length - 1 === idx ? null : " & "}
          </React.Fragment>
        ));
    }
  }
};

const preHandleData = ({ name, type, defaultValue, desc, details, properties }: DataProps): DataPreHandled => {
  return {
    name,
    type: Tag(type),
    defaultValue: [undefined, null].includes(defaultValue) ? (
      <span css={$css`color: gainsboro`}>{defaultValue}</span>
    ) : typeof defaultValue === "boolean" ? (
      `${defaultValue}`
    ) : typeof defaultValue === "string" ? (
      `"${defaultValue}"`
    ) : typeof defaultValue === "object" ? (
      (() => {
        try {
          return `{ ${Object.keys(defaultValue).map((key) => `${key}: ${defaultValue[key]}`)} }`;
        } catch (error) {
          return defaultValue;
        }
      })()
    ) : defaultValue === "--" ? (
      "--"
    ) : (
      defaultValue
    ),
    desc,
    details,
    properties: properties?.map((prop) => preHandleData(prop)) || [],
  };
};

function createData(
  name: string,
  type: "number" | "string" | "ReactNode" | "boolean" | (string & {}) | "object" | object,
  defaultValue?: any,
  desc?: React.ReactNode,
  details?: React.ReactNode,
  properties?: DataProps[]
) {
  return preHandleData({
    name,
    type,
    defaultValue,
    desc,
    details,
    properties,
  });
}

function Row(props: { row: ReturnType<typeof createData>; type?: "param" | "return" }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            disabled={!row.properties?.length && !row.details}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.type}</TableCell>
        {props.type === "param" && <TableCell align="center">{row.defaultValue}</TableCell>}
        <TableCell align="right">{row.desc}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {row.details}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      type
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      default
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      description
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.properties.map((prop) => (
                    <TableRow key={prop.name}>
                      <TableCell component="th" scope="row">
                        {prop.name}
                      </TableCell>
                      <TableCell align="center">{prop.type}</TableCell>
                      {props.type === "param" && <TableCell align="center">{prop.defaultValue}</TableCell>}
                      <TableCell align="right">{prop.desc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ApiTable(
  props: {
    rows?: Parameters<typeof preHandleData>[0][];
  } & (
    | {
        param?: true;
        return?: false;
      }
    | { param?: false; return?: true }
  )
) {
  const headCellAttrs = {
    sx: {
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
    },
  };
  const rows = props.rows?.map((row) =>
    createData(row.name, row.type, row.defaultValue, row.desc, row.details, row.properties ?? [])
  );
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell {...headCellAttrs} />
            <TableCell {...headCellAttrs}>{props?.return ? "ReturnValue" : "Parameters"}</TableCell>
            <TableCell {...headCellAttrs} align="center">
              type
            </TableCell>
            {!props?.return && (
              <TableCell {...headCellAttrs} align="center">
                default
              </TableCell>
            )}
            <TableCell {...headCellAttrs} align="right">
              description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <Row key={row.name} row={row} type={props.return ? "return" : "param"} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
