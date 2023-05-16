import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BtnsGitLink = () => {
  return (
    <div className="gitLinkCont">
        <a
            href="https://www.linkedin.com/in/pedro-fanelli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="gitlink" fontSize="large" />
          </a>

          <a
            href="https://github.com/pedrofanelli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="gitlink" fontSize="large" />
          </a>
          <div></div>
    </div>
  )
}

export default BtnsGitLink