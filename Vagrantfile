Vagrant.configure(2) do |config|

  # ISO
  # config.vm.box = "ycalistrato/ECorp"
  config.vm.box = "erackson/EcoRide"

  # Memoria da Maquina Virtual
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
     vb.gui = false

     # Customize the amount of memory on the VM:
     vb.memory = "512"
  end

  # Verificar atualização da ISO
  config.vm.box_check_update = true

  # Rede
  # config.vm.network "forwarded_port", guest: 3000, host: 8080
  config.vm.network "private_network", ip: "192.168.24.69"

  # Sincronização Extra
  # config.vm.synced_folder "../data", "/vagrant_data" ( Extra Folder Sync )

  # Provision 
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
  #   sudo apt-get install -y nodejs
  #   sudo apt-get install -y build-essential
  #   sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
  #   echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
  #   sudo apt-get update
  #   sudo apt-get install mongodb-org -y
  #   sudo locale-gen "en_US.UTF-8"
  #   export LC_ALL=C
  #   sudo apt-get install git-core
  # SHELL

  ### Fix SSH Authentication Failure
  config.ssh.private_key_path = "./vagrant_private_key"
  config.ssh.forward_agent = true

end