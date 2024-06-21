# Dockerfile.base in this 
FROM mibreit/mibreit-web-dev:latest 

RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
  sudo=1.9.9-1ubuntu2.4 && \
  apt-get clean -y && \
  rm -rf /var/lib/apt/lists/*

RUN ln -s $NVM_DIR/versions/node/$NODE_VERSION/bin/node /usr/local/bin/node && \
  ln -s $NVM_DIR/versions/node/$NODE_VERSION/bin/npm /usr/local/bin/npm && \
  ln -s $NVM_DIR/versions/node/$NODE_VERSION/bin/npx /usr/local/bin/npx && \
  npm install -g gulp-cli && \
  ln -s $NVM_DIR/versions/node/$NODE_VERSION/bin/gulp /usr/local/bin/gulp

# setup developer user
ENV UID=${UID:-1000}
ENV GID=${UID:-1000}
ENV USER=${USER:-developer}
RUN groupadd -g $GID $USER && \
  useradd -d /home/$USER -s /bin/bash -m $USER -l -u $UID -g $GID && \
  echo "developer ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN usermod -aG docker $USER
USER $USER

# Highlight Branch in Bash for new user
RUN echo "parse_git_branch() {" >> ~/.bashrc && \
  echo "  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'" >> ~/.bashrc && \
  echo "}" >> ~/.bashrc && \
  echo "export PS1='\u@\h \[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ '" >> ~/.bashrc

# Add custom tooling on top, if required