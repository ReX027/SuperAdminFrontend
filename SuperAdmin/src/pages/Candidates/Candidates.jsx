import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const columns = [
  { field: "name", headerName: "Candidate Name" },
  { field: "companyName", headerName: "Company Name" },
  { field: "jobAppliedTo", headerName: "Job Applied" },
  { field: "email", headerName: "Candidate email" },
  // { field: "_id", headerName: "Id" },
  { field: "status", headerName: "Status" },
  //   { field: "headquarter", headerName: "Location" },
];

const Candidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [open, setOpen] = useState(false);
  // const [currentCompany, setCurrentCompany] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/total-number-of-candidates",
          {
            withCredentials: true,
          }
        );
        console.log(response.data, "data");
        const rawCandidates = response.data.candidates;

        // Process the raw candidates data to merge jobs applied by the same candidate
        const processedCandidates = [];
        const candidateMap = new Map();

        rawCandidates.forEach((candidate) => {
          const existingCandidate = candidateMap.get(candidate.email);

          if (existingCandidate) {
            existingCandidate.jobsApplied.push({
              jobAppliedTo: candidate.jobAppliedTo,
              companyId: candidate.companyId,
            });
          } else {
            candidateMap.set(candidate.email, {
              ...candidate,
              jobsApplied: [
                {
                  jobAppliedTo: candidate.jobAppliedTo,
                  companyId: candidate.companyId,
                },
              ],
            });
          }
        });

        candidateMap.forEach((value) => processedCandidates.push(value));

        setCandidates(processedCandidates);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  //   useEffect(() => {
  //     const processCandidates = (rawCandidates) => {
  //       const candidateMap = new Map();

  //       rawCandidates.forEach((candidate) => {
  //         const existingCandidate = candidateMap.get(candidate.email);

  //         if (existingCandidate) {
  //           existingCandidate.jobsApplied.push({
  //             jobAppliedTo: candidate.jobAppliedTo,
  //             companyId: candidate.companyId,
  //           });
  //         } else {
  //           candidateMap.set(candidate.email, {
  //             ...candidate,
  //             jobsApplied: [
  //               {
  //                 jobAppliedTo: candidate.jobAppliedTo,
  //                 companyId: candidate.companyId,
  //               },
  //             ],
  //           });
  //         }
  //       });

  //       return Array.from(candidateMap.values());
  //     };

  //     const processedCandidates = processCandidates(defaultCandidates);
  //     setCandidates(processedCandidates);
  //   }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user?.Candidate ? (
        <div>
          <h1 style={{ textAlign: "center" }}>⚠️</h1>
          <h1> Not authorised for this route</h1>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.field}>
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {candidates
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((candidate) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={candidate._id}
                    >
                      {columns.map((column) => {
                        let value;
                        if (column.field === "jobAppliedTo") {
                          value = candidate.jobsApplied
                            .map((job) => ` ${job.jobAppliedTo.jobTitle}`)
                            .join(", ");
                        } else {
                          value = candidate[column.field];
                        }
                        return (
                          <TableCell key={column.field}>{value}</TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={candidates.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      )}
    </>
  );
};

export default Candidate;
