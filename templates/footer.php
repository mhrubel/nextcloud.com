<?php

// The basic translation for the files
$l = new L10N('footer');

?>
<footer class="page-footer">
    <div class="container">
        <div class="col-sm-3">
            <h1 class="revealOnScroll"><?php echo($l->t('About Nextcloud')) ?></h1>
            <ul class="revealOnScroll">
                <li><a href="<?php echo home_url('about') ?>"><?php echo($l->t('About us')) ?></a></li>
                <li><a href="<?php echo home_url('contributors') ?>"><?php echo($l->t('Community')) ?></a></li>
                <li><a href="<?php echo home_url('jobs') ?>"><?php echo($l->t('Jobs')) ?></a></li>
                <li><a href="<?php echo home_url('/community/code-of-conduct/') ?>"><?php echo($l->t('Code of conduct')) ?></a></li>
                <li><a href="<?php echo home_url('privacy') ?>"><?php echo($l->t('Privacy and legal')) ?></a></li>
            </ul>
        </div>
        <div class="col-sm-3">
            <h1  class="revealOnScroll"><?php echo($l->t('Resources')) ?></h1>
            <ul class="revealOnScroll">
                <li><a href="<?php echo home_url('support') ?>"><?php echo($l->t('Support')) ?></a></li>
                <li><a href="https://docs.nextcloud.com/server/10/admin_manual/"><?php echo $l->t('Admin manual') ?></a></li>
                <li><a href="https://docs.nextcloud.com/server/10/user_manual/"><?php echo $l->t('User manual') ?></a></li>
                <li><a href="https://docs.nextcloud.com/server/10/developer_manual/"><?php echo $l->t('Developer manual') ?></a></li>
                <li><a href="<?php echo home_url('security') ?>"><?php echo $l->t('Security') ?></a></li>
                <li><a href="https://github.com/nextcloud"><?php echo $l->t('Code on GitHub') ?></a></li>
            </ul>
        </div>
        <div class="col-sm-3">
            <h1 class="revealOnScroll"><?php echo $l->t('Interact') ?></h1>
            <ul  class="revealOnScroll">
                <li><a href="https://webchat.freenode.net/?channels=nextcloud"><?php echo $l->t('IRC Channel') ?></a></li>
                <li><a href="https://help.nextcloud.com/categories"><?php echo $l->t('Forums') ?></a></li>
                <li><a href="<?php echo home_url('contact') ?>"><?php echo $l->t('Contact us') ?></a></li>
                <li><a href="<?php echo home_url('press') ?>"><?php echo $l->t('Press center') ?></a></li>
                <li><a href="https://docs.nextcloud.com/server/10/developer_manual/bugtracker/index.html"><?php echo $l->t('Bug Tracker') ?></a></li>
            </ul>
        </div>
        <div class="col-sm-3">
            <h1 class="revealOnScroll"><?php echo $l->t('Follow us') ?></h1>
            <ul  class="revealOnScroll">
                <li><a href="https://plus.google.com/b/104036748063781940910/104036748063781940910/about"><?php echo $l->t('Google+') ?></a></li>
                <li><a href="https://www.facebook.com/Nextcloud-1032807203462807/"><?php echo $l->t('Facebook') ?></a></li>
                <li><a href="https://twitter.com/nextclouders"><?php echo $l->t('Twitter') ?></a></li>
                <li><a href="<?php echo home_url('blogfeed') ?>">RSS<?php echo $l->t('Feed') ?></a></li>
            </ul>
        </div>
    <div class="row">
		<div class="col-sm-12 text-center">
		<p  class="revealOnScroll"><a href="https://github.com/nextcloud/nextcloud.com">MIT</a> &copy; </font> <?php echo date('Y'); ?> Nextcloud, <small><a href="/impressum"><?php echo $l->t('Legal Notice') ?></a></small></p>
		</div>
	</div>
  </div>
</footer>
